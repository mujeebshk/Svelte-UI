<div>
    <button class="btn">+<slot/></button>
</div>
<style>
           *{
            margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
font-size:30px;
display:flex;
        }
    button{
        background-color: var(--primary-background);
color: var(--plain);
padding: .2em 1em;
font-size: .6em;
cursor: pointer;
    }

</style>