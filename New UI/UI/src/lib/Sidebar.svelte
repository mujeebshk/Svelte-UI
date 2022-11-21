<script lang="ts">
      import { link } from "svelte-routing";
      import ButtonName from "./ButtonName.svelte"
    //         const body = document.querySelector('body'),
    //   sidebar = body.querySelector('nav'),
    //   toggle = body.querySelector(".toggle"),
    //   searchBtn = body.querySelector(".search-box"),
    //   modeSwitch = body.querySelector(".toggle-switch"),
    //   modeText = body.querySelector(".mode-text");
  import Skeleton from "./Skeleton.svelte";
  import Tree from "./Tree.svelte"
let close = true;
const closed = ():boolean => close = !close;
let dark = false;
// export let icon = "";
// export let label = "";
let promise = false;
let current = 'dashboard';
let theme = "theme-light";
  const html = document.querySelector("html");
  html.dataset.theme = `theme-light`;
  function switchTheme() {
    if (theme == "theme-light") {
      theme = "theme-dark";
    }
    else {
      theme = "theme-light";
    }
    html.dataset.theme = theme;
  }
let darked = ():boolean => dark = !dark;
// export let location;


// function toggled() {
// 	window.document.body.classList.toggle('dark');
// }
// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     // if(body.classList.contains("dark")){
//     //     modeText.innerText = "Light mode";
//     // }else{
//     //     modeText.innerText = "Dark mode";
        
//     // }
// });
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<body class:dark>
    <nav class="sidebar close" class:close >
        <header>
            <div class="image-text" use:link>
                <span class="image">
                    <img src="/atom-logo.png" alt="atom logo" width="45" />
                </span>
                
                <div class="text logo-text">
                    <span class="name">Atom Cloud</span>
                    <span class="profession"><small>big data, tamed...</small>
                    </span>
                </div>
            </div>
            
            <i class='bx bx-chevron-right toggle'on:click={closed} ></i>
        </header>
        
        <div class="menu-bar">
            <div class="menu">
                
                <!-- <li class="search-box" class:close >
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li> -->
                
                <ul class="menu-links">
                    <li class='nav-link'  
                    class:active={current === 'dashboard'} on:click={() => current = 'dashboard'}
                    >
                    <a href="/" use:link>
                        <i class='bx bx-home-alt icon'
                        class:active={current === 'dashboard'} on:click={() => current = 'dashboard'}
                        use:link  ></i>
                        <span class="text nav-text"
                        class:active={current === 'dashboard'} on:click={() => current = 'dashboard'}
                            >Dashboard</span>
                        </a>
                    </li>
                    
                    <li class="nav-link" class:active={current === 'revenue'} on:click={() => current = 'revenue' } >
                        <a href="/tree" use:link>
                            <!-- {#if icon != ""} -->
                            <!-- <i class='bx {icon} icon' ></i> -->
                            <i class='bx bx-bar-chart-alt-2 icon' class:active={current === 'revenue'} on:click={() => current = 'revenue' } ></i>
                            <!-- {/if} -->
                            <!-- {#if label != ""} -->
                            <!-- <span class="text nav-text">{label}</span> -->
                            <!-- {/if} -->
                            <span class="text nav-text" class:active={current === 'revenue'} on:click={() => current = 'revenue' }>Revenue</span>
                        </a>
                    </li>
                    
                    <li class="nav-link" class:active={current === 'notification'} on:click={() => current = 'notification' } >
                        <a href="/">
                            <i class='bx bx-bell icon' class:active={current === 'notification'} on:click={() => current = 'notification' }></i>
                            <span class="text nav-text" class:active={current === 'notification'} on:click={() => current = 'notification' }>Notifications</span>
                        </a>
                    </li>
                    
                    <li class="nav-link" class:active={current === 'analytics'} on:click={() => current = 'analytics' } >
                        <a href="/">
                            <i class='bx bx-pie-chart-alt icon' class:active={current === 'analytics'} on:click={() => current = 'analytics' } ></i>
                            <span class="text nav-text" class:active={current === 'analytics'} on:click={() => current = 'analytics' }>Analytics</span>
                        </a>
                    </li>
                    
                    <li class="nav-link" class:active={current === 'likes'} on:click={() => current = 'likes' } >
                        <a href="/">
                            <i class='bx bx-heart icon' class:active={current === 'likes'} on:click={() => current = 'likes' } ></i>
                            <span class="text nav-text" class:active={current === 'likes'} on:click={() => current = 'likes' }>Likes</span>
                        </a>
                    </li>
                    
                    <li class="nav-link" class:active={current === 'wallets'} on:click={() => current = 'wallets' } >
                        <a href="/">
                            <i class='bx bx-wallet icon' class:active={current === 'wallets'} on:click={() => current = 'wallets' } ></i>
                            <span class="text nav-text" class:active={current === 'wallets'} on:click={() => current = 'wallets' }>Wallets</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div class="bottom-content">
                <li class="">
                    <a href="/">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>
                
                <li class="mode" class:dark>
                    <div class="sun-moon">
                        <!-- {#if darked} -->
                        <i class='bx bx-moon icon moon'></i>
                        <!-- {:else} -->
                    <i class='bx bx-sun icon sun'></i>
                    <!-- {/if} -->
                </div>
                <span class="mode-text text">Dark mode</span>
                
                <div class="toggle-switch" on:click={darked} on:click={() => switchTheme()}>
                    <span class="switch"></span>
                </div>
            </li>
            
        </div>
    </div>
    
</nav>

<section class="home">
    <div class='main'>
        <!-- <div class="text texts">Dashboard 
            <div class="search-box onne">
                <i class='bx bx-search icon i'></i>
                <input type="text" placeholder="Search...">
            </div>
            <button class="btn">+   </button>
        </div> -->
        <!-- <Skeleton /> -->
<div class="paper">
   <slot />
</div>
    </div>
    <!-- <Tree /> -->
</section>
</body>
<style>
    /* Google Font Import - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root{
    /* ===== Colors ===== */
    /* --body-color: #E4E9F7;
    --sidebar-color: #FFF;
    --primary-color: #695CFE;
    --primary-color-light: #F6F5FF;
    --toggle-color: #DDD;
    --text-color: #707070; */

    /* ====== Transition ====== */
    --tran-03: all 0.2s ease;
    --tran-03: all 0.3s ease;
    --tran-04: all 0.3s ease;
    --tran-05: all 0.3s ease;
}

body{
    /* min-height: 100vh; */
    background-color: var(--primary-background-light);
    transition: var(--tran-05);
}

/* ::selection{
    background-color: var(--secondary-background);
    color: var(--plain);
} */
/* button{
    background-color: var(--primary-background);
    color: var(--plain);
    padding:.2em 1em;
    font-size:.6em;
    cursor: pointer;
}
.onne{
    display: flex;
    align-items: center;
    font-size: 20px;
    width: 8em;
height: 2.2em;
border: 1px solid rgb(226,227,229);
position:absolute;
right: 11em;
}
.i{
    margin: 0 .5em;
} */

/* body.dark{
    --body-color: #18191a;
    --sidebar-color: #242526;
    --primary-color: #3a3b3c;
    --primary-color-light: #3a3b3c;
    --toggle-color: #fff;
    --text-color: #ccc;
} */

/* ===== Sidebar ===== */
 .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 15.6em;
    padding: 10px 14px;
    background: var(--background);
    transition: var(--tran-05);
    z-index: 100;  
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
}
.sidebar.close{
    width: 5.5em;
    /* overflow: hidden; */
}

/* ===== Reusable code - Here ===== */
.sidebar li, li{
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon{
    color: var(--primary-color);
    transition: var(--tran-03);
}

.sidebar .text{
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}
.sidebar.close .text{
    opacity: 0;
}
/* =========================== */

.sidebar header{
    position: relative;
}

.sidebar header .image-text{
    display: flex;
    align-items: center;
}
.sidebar header .logo-text{
    display: flex;
    flex-direction: column;
}
header .image-text .name {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 600;
}

header .image-text .profession{
    font-size: 16px;
    margin-top: -2px;
    display: block;
}

.sidebar header .image{
    display: flex;
    align-items: center;
    justify-content: center;
}

/* .sidebar header .image img{
    width: 40px;
    border-radius: 6px;
} */

.sidebar header .toggle{
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    /* background-color: var(--background); */
    color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
}

body.dark .sidebar header .toggle{
    color: var(--primary-color);
}

.sidebar.close .toggle{
    transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu{
    margin-top: 40px;
}

 /* li.search-box,
 .search-box
 {
    border-radius: 6px;
    background-color: var(--secondary-color); x
    cursor: pointer;
    transition: var(--tran-05);
} */
:focus{
    border-radius: 6px;
    background-color: var(--secondary-background);
    cursor: pointer;
    transition: var(--tran-05);
    color: var(--plain);
}

 /* li.search-box input,
 .search-box input
 {
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
} */
 li a{
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.nav-link.active{
    background-color: var(--secondary-background);
    border-radius: 6px;
}
/* .text.active{
    color: var(--plain);
}
.icon.active{
    color: var(--plain);
} */
/* .sidebar li a:hover .icon, */
.sidebar li:not(.active) a:hover{
    background-color: var(--primary-background-light);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text{
    color: var(--primary-color);
}

.sidebar .menu-bar{
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow-y: scroll; */
}
.menu-bar::-webkit-scrollbar{
    display: none;
}
.sidebar .menu-bar .mode{
    border-radius: 6px;
    background-color: var(--primary-background-light);
    position: relative;
    transition: var(--tran-05);
}

.menu-bar .mode .sun-moon{
    height: 50px;
    width: 60px;
}

.mode .sun-moon i{
    position: absolute;
}
.mode .sun-moon i.sun{
    opacity: 0;
}
body.dark .mode .sun-moon i.sun{
    opacity: 1;
}
body.dark .mode .sun-moon i.moon{
    opacity: 0;
}

.menu-bar .bottom-content .toggle-switch{
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}
.toggle-switch .switch{
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--secondary-background);
    transition: var(--tran-05);
}

.switch::before{
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--primary-background-light);
    transition: var(--tran-04);
}

body .dark .switch::before{
    left: 20px;
}

.home{
    position: absolute;
    top: 0;
    top: 0;
    left: 250px;
    height: 100%;
    width: calc(100% - 250px);
    transition: var(--tran-05);
    /* background-color: var(--plain); */
}
/* .home .text{
    font-size: 30px;
    font-weight: 500;
    color: var(--primary-color);
    padding: 12px 60px;
    background-color: var(--primary-background-light); x
    background-color: #f0bfce; x
    max-height: 10em;;
} */

.sidebar.close ~ .home{
    left: 5.5em;
    /* height: 100vh; */
    width: calc(100% - 5.5em);
}
body.dark .home .text{
    color: var(--primary-color);
}
img {
    background-color: #fff;
    border-radius: 20rem;
  }
  header > i{
    background-color: var(--primary-background-light);
    color: var(--primary-color);
  }
  /* .paper{
    margin: 0 2em;
    height: 100%;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
  } */
  /* .texts{
    display:flex;justify-content:space-between;align-items:center;position: sticky;
        top: 0;
        background-color: var(--background);
        z-index: 9;

  } */
  .main{
    background-color: var(--primary-background-light);
    color: var(--primary-color);
    min-height: 100%;
  }
</style>