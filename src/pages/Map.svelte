<script>
  import { Link } from 'svelte-routing';
</script>

<main>
  <div class="guide">
    <img
      src="/img/map_tutorial.png"
      alt="
        안녕하세요? 저는 이 작품을 만든 선우 훈 입니다.
        이 '큐브 스테이지'는 가상 미술관 관람을 위해 제작된 웹사이트입니다.
        서울 강남구에 있는 코라아나 미술관의 '스페이스 씨'에서 열리는 전시를 위해 만들었습니다.
        코리아나 미술관으로 가 볼까요? 강남구를 클릭해 주세요.
      "
    />
  </div>
  <img class="flag" src="/img/map_click.png" alt="" />
  <Link to="/game" style="position: absolute; top: 500px; left: 740px;">
    <img src="/img/map_region.png" alt="클릭" />
  </Link>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/map_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .guide {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flag {
    position: absolute;
    top: 400px;
    left: 740px;
  }
</style>
