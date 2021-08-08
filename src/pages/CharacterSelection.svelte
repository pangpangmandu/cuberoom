<script>
  import { Link } from 'svelte-routing';

  let skinNum = 1;
  let eyeNum = 1;
  let hairNum = 1;
  let clothesNum = 1;

  function increaseSkinNum() {
    skinNum++;
    if (skinNum > 3) skinNum = 1;
  }

  function decreaseSkinNum() {
    skinNum--;
    if (skinNum < 1) skinNum = 3;
  }

  function increaseEyeNum() {
    eyeNum++;
    if (eyeNum > 12) eyeNum = 1;
  }

  function decreaseEyeNum() {
    eyeNum--;
    if (eyeNum < 1) eyeNum = 12;
  }

  function increaseHairNum() {
    hairNum++;
    if (hairNum > 48) hairNum = 1;
  }

  function decreaseHairNum() {
    hairNum--;
    if (hairNum < 1) hairNum = 48;
  }

  function increaseClothesNum() {
    clothesNum++;
    if (clothesNum > 12) clothesNum = 1;
  }

  function decreaseClothesNum() {
    clothesNum--;
    if (clothesNum < 1) clothesNum = 12;
  }
</script>

<main>
  <!-- <div style="width: 100%; height: 20%;"></div> -->
  <div class="block-container">
    <div class="block label">
      큐브 스테이지에 입장하기 위한 캐릭터를 만들어 주세요.
    </div>
    <div class="block form">
      <div class="row">
        <div style="width: 50px; margin-right: 12px;">이름</div>
        <input />
        <div style="width: 50px; margin-left: 12px; visibility: hidden;">(공백)</div>
      </div>
      <div class="row">
        <button class="left" on:click={decreaseSkinNum}></button>
        <div class="center character">
          <img src="/img/character/skin-{skinNum}.png" alt="" width="32" style="position: absolute;" />
          <img src="/img/character/eye-{eyeNum}.png" alt="" width="18" style="position: absolute; top: 135px;" />
          <img src="/img/character/hair-{hairNum}.png" alt="" width="32" style="position: absolute; top: 125px;" />
          <img src="/img/character/clothes-{clothesNum}.png" alt="" width="32" style="position: absolute; top: 160px;" />
        </div>
        <button class="right" on:click={increaseSkinNum}></button>
      </div>
      <div class="row">
        <button class="left" on:click={increaseEyeNum}></button>
        <div class="center">얼굴</div>
        <button class="right" on:click={decreaseEyeNum}></button>
      </div>
      <div class="row">
        <button class="left" on:click={increaseHairNum}></button>
        <div class="center">머리색</div>
        <button class="right" on:click={decreaseHairNum}></button>
      </div>
      <div class="row">
        <button class="left" on:click={increaseClothesNum}></button>
        <div class="center">의상</div>
        <button class="right" on:click={decreaseClothesNum}></button>
      </div>
      <Link to='/map' class="decide">
        <img src="/img/ui/decide.png" alt="결정" />
      </Link>
    </div>
    <!-- <div style="width: 340px; height: 200px; visibility: hidden;"></div> -->
  </div>
  <Link to='/' class="to-main">
    <img src="/img/ui/back_to_main.png" alt="메인으로" />
  </Link>
</main>

<style>
  main {
    height: 100%;
    background-image: url('/img/ui/intro_background.jpg');
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

  .block-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20%;
    margin-bottom: 200px;
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

  .row div {
    font-size: 24px;
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
    background-image: url('/img/ui/arrow_left.png');
    margin-right: 12px;
  }

  .right {
    background-image: url('/img/ui/arrow_right.png');
    margin-left: 12px;
  }

  :global(a.decide) {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }

  :global(a.to-main) {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }

  @media (orientation: portrait) {
    main {
      overflow: hidden;
    }

    .block-container {
      flex-direction: column;
      align-items: center;
      margin: 0px;
    }

    .block.label {
      width: 80%;
      margin: 20px 0px 20px 0px;
      font-size: 20px;
    }

    .block.form {
      width: 80%;
      height: fit-content;
      padding-bottom: 60px;
    }

    .row div {
      font-size: 20px;
    }

    :global(a.decide) {
      bottom: 20px;
      text-align: center;
      width: 100%;
      right: 0px;
    }

    /* :global(a.to-main) {
      position: absolute;
      bottom: 30px;
      right: 30px;
      width: 100%;
    } */
  }
</style>
