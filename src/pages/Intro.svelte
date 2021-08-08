<script>
  import { Link } from 'svelte-routing';
</script>

<main>
  <img src="/img/ui/title.png" alt="큐브 스테이지" />
  <div>
    <Link to="character-selection">
      <img src="/img/ui/start.png" alt="시작하기" />
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
    object-fit: none;
    flex: 1;
  }

  div {
    flex: 1;
  }

  @media (orientation: portrait) {
    main {
      overflow: hidden;
    }

    /* img {
      width: 80%;
      object-fit: scale-down;
    }

    div {
      display: flex;
      justify-content: center;
    }
    :global(a) {
      width: 80%;
    }

    :global(a) img {
      width: 100%;
    } */
  }
</style>
