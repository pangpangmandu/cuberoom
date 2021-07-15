<script>
  import { Link } from 'svelte-navigator';
</script>

<main>
  <img
    src="/img/03_튜토리얼팝업(참조용).png"
    alt="
      안녕하세요? 저는 이 작품을 만든 선우 훈 입니다.
      이 '큐브 스테이지'는 가상 미술관 관람을 위해 제작된 웹사이트입니다.
      서울 강남구에 있는 코라아나 미술관의 '스페이스 씨'에서 열리는 전시를 위해 만들었습니다.
      코리아나 미술관으로 가 볼까요? 강남구를 클릭해 주세요.
    "
  />
  <img src="/img/클릭지시버튼.png" alt="클릭" />
  <Link to="/entrance">
    <img src="/img/03_서울행정구 배경_01_강남구 버튼.png" alt="결정" />
  </Link>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/03_서울행정구 배경_01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>