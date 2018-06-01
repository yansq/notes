### Mixins
``` less
.red{
  color: red
}
/*加括号可使该段代码不被编译*/
.blue(){
  background-color: blue
}
div{
  .red;
  .blue;
  width: 10px;
  height: 10px;
}

/*将编译为*/
.red{
  color: red;
}
div{
color: red;
background-color: blue;
width: 10px;
height: 10px;
}
```
