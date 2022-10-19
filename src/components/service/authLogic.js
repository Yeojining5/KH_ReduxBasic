import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { resolvePath } from "react-router-dom";

class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  getUserAuth = () => {
    return this.firebaseAuth;
  }
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  }


  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic;

//////////// 외부에서 접근하도록 코드 수정 ////////////////////
export const loginGoogle = (firebaseAuth, googleProvider) => {
  return new Promise((resolve, reject) => {
    signInWithPopup(firebaseAuth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      resolve(user); // 성공했을 때는 resolve에 파라미터로 담아주기
    })
    .catch((e) => reject(e));
  });
};

export const logout = (firebaseAuth) => {
  window.localStorage.removeItem("userId");
  return new Promise((resolve, reject) => {
    firebaseAuth
      .signOut()
      .catch((e) => reject(alert(e + ": 로그아웃 에러입니다.")));
  });
};


export const onAuthChange = (firebaseAuth) => {
  return new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};