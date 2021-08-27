import works from './works';

let popupSprite;
let descriptionContainer;

export function popupCreate(scene, { x, y }, workNum) {
  const work = works[workNum];
  popupSprite = scene.add.sprite(x, y, "popup");
  popupSprite.setInteractive();

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerover", () => {
    scene.input.setDefaultCursor("pointer");
  });

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerout", () => {
    scene.input.setDefaultCursor("auto");
  });

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerdown", () => {
    descriptionContainer = document.createElement('div');
    descriptionContainer.style.position = 'absolute';
    descriptionContainer.style.top = '0px';
    descriptionContainer.style.left = '0px';
    descriptionContainer.style.width = '100%';
    descriptionContainer.style.height = '100%';
    descriptionContainer.style.display = 'flex';
    descriptionContainer.style.flexDirection = 'column';
    descriptionContainer.style.justifyContent = 'flex-end';
    descriptionContainer.style.alignItems = 'center';

    const description = document.createElement('div');
    description.style.minWidth = '460px';
    description.style.maxWidth = '600px';
    description.style.backgroundColor = 'white';
    description.style.borderColor = 'black';
    description.style.borderWidth = '4px';
    description.style.borderStyle = 'solid';
    description.style.padding = '24px';
    description.style.display = 'flex';
    description.style.justifyContent = 'space-between';
    description.style.position = 'relative';
    description.style.bottom = '150px';

    const left = document.createElement('img');
    left.src = work.imgUrl;
    left.style.width = '160px';
    left.style.height = '160px';
    left.style.marginRight = '24px';

    const right = document.createElement('div');
    right.style.flex = '1';
    right.style.position = 'relative';

    let div = document.createElement('div');
    div.appendChild(document.createTextNode(work.title));
    right.appendChild(div);

    div = document.createElement('div');
    div.style.marginBottom = '16px';
    div.appendChild(document.createTextNode(work.medium));
    right.appendChild(div);

    div = document.createElement('div');
    div.style.wordBreak = 'keep-all';
    div.style.marginBottom = '16px';
    div.appendChild(document.createTextNode(work.description));
    right.appendChild(div);

    div = document.createElement('div');
    div.style.wordBreak = 'keep-all';
    div.style.marginBottom = '32px';
    div.appendChild(document.createTextNode(work.alt));
    right.appendChild(div);

    const closeButton = document.createElement('button');
    closeButton.style.border = 'none';
    closeButton.style.backgroundImage = 'url("/img/ui/close.png")';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.top = '0px';
    closeButton.style.right = '0px';
    closeButton.style.position = 'absolute';
    closeButton.onclick = () => document.body.removeChild(descriptionContainer);

    const link = document.createElement('a');
    link.href = work.url;
    link.style.position = 'absolute';
    link.style.right = '0px';
    link.style.bottom = '0px';
    link.appendChild(document.createTextNode('새 창으로 링크 열기'));

    right.appendChild(closeButton);
    right.appendChild(link);

    description.appendChild(left);
    description.appendChild(right);
    descriptionContainer.appendChild(description);
    document.body.appendChild(descriptionContainer);

  });

  return {
    phaser: popupSprite,
  };
}

export function popupDestroy() {
  popupSprite.destroy();
  if (descriptionContainer) document.body.removeChild(descriptionContainer);
}
