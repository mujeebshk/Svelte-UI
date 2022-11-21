<div class="tests">
    <slot/>
</div>
<style>
    .tests{
        display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background-color: var(--background);
z-index: 9;
font-size: 30px;
font-weight: 500;
color: var(--primary-color);
padding: 12px 60px;
max-height: 10em;
    }
</style>