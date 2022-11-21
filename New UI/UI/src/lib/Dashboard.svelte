<div id="card">
<div id="car">
    <div class="card one"></div>
    <div class="card two"></div>
</div>
<div id="car2">
<div class="card three"></div>
<div class="card four"></div>
  </div>
  </div>
  <style>
    #card {
        margin: 0 auto;
    }
    .card{
        background-color: #fff;
        margin: .5em;
        border-radius: .2em;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        
    }
    
    #car, #car2{
        justify-content:flex-start;
        display:flex;
        
    }
    .one{
        height: 14em;
    width: calc(100% - 40%);

}
.two{
    height: 14em;
    width: calc(100% - 60%);
}
.three{
    height: 10em;
    width: calc(100% - 40%);
}
.four{
    height: 10em;
    width: calc(100% - 60%);
}
  </style>