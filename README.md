# 09_pjt(최지우, 기뮤나, 박시형)

## 구현한 내용
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