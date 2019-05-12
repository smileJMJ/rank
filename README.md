# rank
버튼 및 드래그앤드랍(jquery UI) 이용한 순위변경 UI [2017]

버튼 클릭 및 드래그앤드랍으로 리스트 정렬을 변경할 수 있는 UI입니다.

## 사용법
jquery.min.js && jquery-ui.js  
TweenMax.js  
rank.js   
를 import 합니다.

## 호출 코드
```
rankUpDown.init({
  ele:".list",
  listType:"li",
  btnUp:".list_up",	
  btnDown:".list_down"
});
```  
- ele: 리스트를 감싸고 있는 영역의 class/id 명  ex) ul/div 등
- listType: 리스트 형태  ex) li/dl/div 등
- btnUp/btnDown: 버튼 class/id 명

## 데모
https://smilejmj.github.io/rank/index.html
