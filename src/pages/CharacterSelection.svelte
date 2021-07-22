<script>
  import { Link } from 'svelte-routing';
</script>

<main>
  <div style="width: 100%; height: 20%;"></div>
  <div style="display: flex; justify-content: center; align-items: flex-start;">
    <div class="block label">
      큐브 스테이지에 입장하기 위한 캐릭터를 만들어 주세요.
    </div>
    <div class="block form">
      <div class="row">
        <div style="width: 50px; margin-right: 12px; font-size: 24px;">이름</div>
        <input />
        <div style="width: 50px; margin-left: 12px; visibility: hidden;">(공백)</div>
      </div>
      <div class="row">
        <button class="left"></button>
        <div class="center character">
          <img src="/img/character/stop-1.png" alt="" height="90" />
        </div>
        <button class="right"></button>
      </div>
      <div class="row">
        <button class="left"></button>
        <div class="center">얼굴</div>
        <button class="right"></button>
      </div>
      <div class="row">
        <button class="left"></button>
        <div class="center">머리색</div>
        <button class="right"></button>
      </div>
      <div class="row">
        <button class="left"></button>
        <div class="center">의상</div>
        <button class="right"></button>
      </div>
      <Link to='/map' style="position: absolute; bottom: 24px; right: 24px;">
        <img src="/img/decide.png" alt="결정" />
      </Link>
    </div>
    <div style="width: 340px; height: 200px; visibility: hidden;"></div>
  </div>
  <Link to='/' style="position: absolute; bottom: 30px; right: 30px;">
    <img src="/img/back_to_main.png" alt="메인으로" />
  </Link>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/intro_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* display: flex;
    justify-content: center; */
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .block {
    border: 4px solid black;
    background-color: white;
    font-family: NeoDunggeunmo;
  }

  .block.label {
    font-size: 24px;
    width: 260px;
    padding: 20px;
    margin-right: 40px;
    word-break: keep-all;
    line-height: 140%;
  }

  .block.form {
    width: 550px;
    height: 400px;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr 1fr;
    padding: 20px 0px;
    position: relative;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  input {
    width: 100px;
    height: 24px;
    padding: 10px;
    border-radius: 0;
    box-shadow: inset 0px 3px grey;
    font-family: NeoDunggeunmo;
    font-size: 20px;
  }

  input:focus {
    outline: none;
  }

  .center {
    width: 120px;
    font-size: 24px;
  }

  .character {
    height: 120px;
    border: 2px solid black;
    box-shadow: inset 0px 3px grey;
  }

  button {
    border: none;
    background: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }

  .left {
    background-image: url('/img/arrow_left.png');
    margin-right: 12px;
  }

  .right {
    background-image: url('/img/arrow_right.png');
    margin-left: 12px;
  }
</style>
