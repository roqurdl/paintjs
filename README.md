js와 canvas tag를 통한 그림판 만들기

referece는 강의 영상에서 나온 코드, Demo는 영상을 보기전에 작동원리만 확인 후 처음부터 작성해본 코드.

Demo와 reference에서 차이는 js 파일에서 canvas, range, mode, save 와같은 eventlistenr를 if문을 통해서 묶어놓은 것,
스스로 작성하면서 이를 쓰지 않아서 코드의 양 자체는 줄었으나, 위의 방식을 사용하면 가독성에서 더 도움이 될 것이라고 생각이 들었다.
또한 명명법이 내가 쓴 코드는 더 짧으나 좀 더 균일한 규칙을 만들어서 명명해야 할 것으로 판단. 현재는 의미를 한번에 파악하기 좀 더 어려운 듯하다. ex) canvasClick => fillCanvasClick 같이 한번에 작동방식과 무엇을 의미하는지 한번에 알 수 있게.

reference와 두번째 차이는 브러쉬의 두깨를 바꾸는 function changeRange에서 나는 argument를 사용하지 않고 입력받은 input value를 사용했고, reference에서는 이를 사용해서 작성했다. 이를 활용할 때마다 console.log를 사용해서 해당 정보들을 다 확인했는데, 이런 과정을 좀 더 해봐야겠다.
