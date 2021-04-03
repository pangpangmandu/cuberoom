# Tilemap example

타일맵을 phaser에서 사용해 보는 게 목적이다.

## index.html

첫 시도.

### 배운 것

* 이미지 레이어가 잘 동작 안한다는 것을 배움.
* 배경 이미지 전체를 타일셋으로 만들어서 한꺼번에 복붙이 효율적이었다.
* Phaser에서 Tiled를 쓰기 위해선, tilemap, layer, tileset, collision 개념을 사용해야 한다.

### 사용한 방법 정리

* preload에서 타일셋 이미지 로드
* preload에서 tiled json 로드
* this.make.tilemap key에 tilemap json key 사용해서 map 만듬
* map.addTilesetImage tileset 이름과 이미지 로드 키 사용해서 타일셋 만듬
* map.createLayer에 타일셋 이미지 넣어서 레이어 만듬
* map.setCollisionByProperty 를 사용해서 어떤 레이어의 어떤 타일들이 충돌해야하는지 정의
* this.physics.add.collider에 player와 layer를 인자로 넣기.

## second-try.html

### 배운 것

* 타일드를 잘 쓰는 법과 당장 필요한 걸 테스트하는 건 달라. 이미지를 통째로 하는
  건 아무래도 당장 테스트하는 방법이야.
* 
