<script>
  import { Link } from 'svelte-navigator';
</script>

<main>
  <section class="block-container">
    <div class="block">
      큐브 스테이지에 입장하기 위한 캐릭터를 만들어 주세요.
    </div>
  </section>
  <section class="block-container">
    <div class="block">
      <Link to='/map'>
        <img src="/img/결정 버튼.png" alt="결정" />
      </Link>
    </div>
  </section>
  <section class="block-container">
    <Link to='/'>
      <img src="/img/메인으로 버튼.png" alt="메인으로" />
    </Link>
  </section>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/01_시작 배경 01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
  }

  .block {
    border: 4px solid black;
    background-color: white;
  }

  .block-container {
    flex: 1;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
</style>