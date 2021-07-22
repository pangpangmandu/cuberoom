<script>
  import { Link } from 'svelte-routing';
</script>

<main>
  <img src="/img/01_시작 배경 01_타이틀로고.png" alt="큐브 스테이지" />
  <div>
    <Link to="character-selection">
      <img src="/img/01_시작 배경 01_시작하기 버튼.png" alt="시작하기" />
    </Link>
  </div>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/01_시작 배경 01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    object-fit: none;
    flex: 1;
  }

  div {
    flex: 1;
  }
</style>
