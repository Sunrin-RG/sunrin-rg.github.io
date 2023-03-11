# RG - Republic Of Game

2023년을 맞이하여 리뉴얼된 RG의 웹 사이트 저장소입니다.

디자인 : **22기 부부장 장운지** </br>
개발 : **IWOP 24기 부장 주현명**

### Github Pages로 호스팅하는 방법

`Settings` -> `Pages` 에서 `deploy from a branch` 옵션을 선택하고
</br>
`gh-pages`를 선택합니다. 이후 master 브랜치를 clone하고 아래와 같은 명령을 입력합니다. </br>

```
yarn install
```

이후 빌드를 진행해줍니다.

```
yarn build
```

`packages.json`에서 `homepage:https://sunrin-rg.github.io` 속성이 들어가있다면 아래와 같이 진행해주세요.

```
yarn deploy
```

이후 배포가 완료됩니다.
