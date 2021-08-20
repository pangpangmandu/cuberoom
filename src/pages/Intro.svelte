<script>
  import { Link } from 'svelte-routing';
</script>

<main>
  <img src="/img/ui/title.png" alt="큐브 룸" width="40%" />
  <div style="text-align: center;">
    <Link to="character-selection">
      <img src="/img/ui/start.png" alt="시작하기" width="60%" />
    </Link>
  </div>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/ui/intro_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    object-fit: contain;
    flex: 1;
  }

  div {
    flex: 1;
  }

  @media (orientation: portrait) {
    main {
      overflow: hidden;
    }
  }
</style>
