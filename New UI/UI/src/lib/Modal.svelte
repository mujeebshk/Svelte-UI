<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import IconButton from "./IconButton.svelte";
    const dispatch = createEventDispatcher();
  
    export let title: String = "My Dialog";
    export let width: string = "100%";
    export let height: string = "100%";
    export let open = false;
    export let closable = true;
    $: (() => {
      if (open && animation != "animation-close") {
       document.body.style.overflow = "hidden";
        setTimeout(() => {
          animation = "animation-open";
        }, 50);
      }
    })();
    $: animation = null;
  
    const close = () => {
      animation = "animation-close";
      setTimeout(() => {
        document.body.style.overflow = "auto";
        open = false;
        dispatch("close");
        animation = null;
      }, 300);
    };
  </script>
  
  {#if open}
    <div class="container">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="back-drop"
        class:animation-back-drop-open={animation == "animation-open"}
        class:animation-back-drop-close={animation == "animation-close"}
        on:click={() => {
          close();
        }}
      />
  
      <div
        class="modal"
        style="width: {width}; height: {height}"
        class:animation-open={animation == "animation-open"}
        class:animation-close={animation == "animation-close"}
      >
        <div style="margin:20px">
          {#if closable}
            <div style="position:absolute; left: 1em; top:20px">
              <a href="#anchor" title="Close" style="text-decoration: none;
              color: darkcyan;">
              <IconButton
              icon="bxs-home"
              on:click={() => {
                close();
              }}
                />
              </a>
              <!-- <img alt="Home icon" srcset="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/512/external-Home-user-interface-anggara-filled-outline-anggara-putra-2.png 2x" style="width: 256px; height: 256px;">
              <img alt="Home icon" srcset="https://img.icons8.com/external-anggara-flat-anggara-putra/512/external-Home-user-interface-anggara-flat-anggara-putra-2.png 2x" style="width: 256px; height: 256px;">
              <img alt="Home icon" srcset="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/512/external-_4-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png 2x" style="width: 256px; height: 256px; filter: invert(79%) sepia(39%) saturate(6422%) hue-rotate(115deg) brightness(87%) contrast(86%);">
              <img alt="Home icon" srcset="https://img.icons8.com/external-creatype-glyph-colourcreatype/512/external-home-essential-ui-v1-creatype-glyph-colourcreatype-3.png 2x" style="width: 256px; height: 256px; filter: invert(0%) sepia(92%) saturate(31%) hue-rotate(152deg) brightness(98%) contrast(106%);">
              <img srcset="https://img.icons8.com/external-anggara-flat-anggara-putra/2x/external-Home-user-interface-anggara-flat-anggara-putra-2.png 2x" alt="Green Home icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg" class="h4 de df dg h5 h6           h7 eb ec bn di" role="presentation"><path d="M12.6666 14V9.33333L7.99998 5L3.33331 9.33333V14H12.6666Z"></path><path d="M8.00001 1.74609L15.7937 9.18551L14.873 10.15L8.00001 3.58935L1.127 10.15L0.20636 9.18551L8.00001 1.74609Z"></path></svg> -->
            </div>
          {/if}
          <h2>{title}</h2>
          <div class="content">
            <slot />
          </div>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
    .container {
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0px;
      top: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 123;
    }
  
    .content {
      position: fixed;
      left: 20px;
      right: 20px;
      bottom: 20px;
      top: 70px;
      padding: 20px;
      overflow-y: auto;
      display:flex;
    }
  
    .back-drop {
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0px;
      top: 0px;
      background-color: rgb(224, 224, 224, 0.2);
      backdrop-filter: blur(2px) opacity(20%);
    }
  
    .modal {
      background-color: var(--background);
      z-index: 2;
      /* transform: scale(0.7); */
      color: var(--onbackground);
    }
    
    .animation-back-drop-open {
        backdrop-filter: blur(1px) opacity(100%);
        /* transition: all 0.3s; */
        -webkit-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;
        transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms; 
        animation-duration: alternate;
    }
    
    .animation-back-drop-close {
        backdrop-filter: blur(0px) opacity(0%);
        /* transition: all 0.3s; */
        /* left: 0; */
        animation-direction:alternate;
        -webkit-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;
        transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms; 
        /* animation:  nudge 5s linear infinite alternate; */
        
    }
    
    .animation-open  {
        transform: scale(1);
        opacity: 1;
        -webkit-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms; 
        /* transition: all 0.3s ease-in-out; */
        -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      -webkit-transform: translate3d(-10%, 0, 0);
  transform: translate3d(0%, 0, 0);
    }
  
    .animation-close {
      /* transform: scaleX(1.7); */
      /* opacity: 0.2; */
      /* transition: .4s; */
      /* left: 0; */
      -webkit-transition: all ease-in-out 250ms;
  transition: all ease-in-out 250ms; 
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0); 
      
      /* animation:  nudge 5s linear infinite alternate; */
    }
  </style>
  