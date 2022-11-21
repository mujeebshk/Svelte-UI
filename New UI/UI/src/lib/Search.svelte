<div class="search-box onne">
    <i class='bx bx-search icon i'></i>
    <input type="text" placeholder="Search...">
</div>
<style>
    *{
        margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
    }
    .search-box {
        border-radius: 6px;
cursor: pointer;
transition: var(--tran-05);
}
i{
    margin: 0 .5em;
}
.onne{
        display: flex;
        align-items: center;
        font-size: 20px;
        width: 8em;
        height: 2.2em;
        border: 1px solid rgb(226,227,229);
        position: absolute;
        right: 11em;

    }
    :focus{
    border-radius: 6px;
    background-color: var(--secondary-background);
    cursor: pointer;
    transition: var(--tran-05);
    color: var(--plain);
}
    .search-box input{
        height: 100%;
width: 100%;
outline: none;
border: none;
background-color: var(--background);
color: var(--primary-color);
border-radius: 6px;
font-size: 17px;
font-weight: 500;
transition: var(--tran-05);
    }
</style>