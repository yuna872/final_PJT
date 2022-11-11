# 09_pjt(최지우, 기뮤나, 박시형)

## 박팀장님 리드미 작성

### 구현한 내용
- API와 axios를 이용해 비동기 통신 구현
- 보고싶은 영화 등록, 삭제 기능 구현
  - 잘못된 영화이름을 검색했을 때 경고메시지 기능 구현
  - 중복된 영화를 등록했을 때 경고메시지 기능 구현
  ```javascript
    ADD_MOVIE(state, info) {
      if (state.myMovies.find((movie) => movie.info.title === info.title )) {
        alert('이미 목록에 있는 영화입니다.')
      } else {
        state.myMovies.push({info,isCanceled:false})
      } 
    }
    addMovie(context, inputV) {
      console.log(inputV)
      console.log(context.state.movies)
      const info = context.state.movies.find((movie) => movie.title === inputV)
      if (info === undefined) {
        alert('올바른 제목을 입력하세요.')
      } else {
        context.commit('ADD_MOVIE', info)
      }
    }
    ```
  - ![올바르지않은제목](/올바르지않은제목.PNG)
  - ![이미있는영화](/이미있는영화.PNG)
- 라우터 활용
```javascript
// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'
import RandomView from '../views/RandomView.vue'
import WatchListView from '../views/WatchListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'movies',
    component: MovieView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView
  },
  {
    path: '/watch-list',
    name: 'watch-list',
    component: WatchListView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```


## 김팀장님 리드미 작성

> templete에서 백그라운드 이미지 삽입


-> movie 객체가 가지고 있는 url 정보를 가공해주어야 한다 (computed 사용)
-> 데이터 형식을 확인해야 하는 것의 중요성

```javascript
<template>
  <div class="card-box" :style="{'backgroundImage':`url(${posterUrl})`}">
    <div class='info'>{{ movie.title }}</div>
    <!-- <div>{{ movie.overview }}</div> -->
  </div>
</template>


computed: {
    posterUrl() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    }
  }
```

> js에서는 파이썬에서의 슬라이싱을 허용하지 않음

```javascript
순회가능한객체.slice(start, end)       // start ~ end-1 번째 원소 반환
순회가능한객체.slice(end)               // 0 ~ end-1 번째 원소 반환
순회가능한객체.slice()                  // 객체를 복사해서 반환하는 것과 같음
```

```javascript
computed: {
    ...
    
    overView() {
      return this.movie.info.overview.slice(0, 140) + "..."
    }
  }

```

> 이미 본 영화를 체크하는 토글 기능 구현

-> movie + isCanceled 속성을 추가해서 배열에 push
-> 이미 목록에 있으면 알림창 띄워주기

```javascript
ADD_MOVIE(state, info) {
      if (state.myMovies.find((movie) => movie.info.title === info.title )) {
        alert('이미 목록에 있는 영화입니다.')
      } else {
        state.myMovies.push({info,isCanceled:false})
      } 
      
    },
    CANCEL_TOGGLE(state, movieItem) {
      state.myMovies = state.myMovies.map((movie) => {
        if (movieItem === movie){
          movie.isCanceled = !movie.isCanceled          
        }
        return movie
      })
    }
```


### map 함수 사용 시 주의해야 할 점
-> 원소를 하나씩 순회하면서 반환 해 주지 않으면 빈 배열이 만들어진다..
-> 실수한 코드
```javascript
CANCEL_TOGGLE(state, movieItem) {
      state.myMovies = state.myMovies.map((movie) => {
        if (movieItem === movie){
          movie.isCanceled = !movie.isCanceled          
        }
        // 여기서 반환 해주어야 해
      })
    }
```