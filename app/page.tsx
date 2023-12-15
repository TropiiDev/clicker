"use client";

export default function Home() {
  const updateClick = () => {
    // save the variable click locally, when this function is called update the click variable by 1
    let click = Number(localStorage.getItem('click')) || 0;
    click++;
    localStorage.setItem('click', click.toString());
    // update the button text
    const button = document.getElementById('button');
    if (button) {
      button.innerHTML = `Clicked ${click} times!`;
    } else {
      console.log('button not found');
      console.log(click);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by clicking the button!
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Created by Tropii
        </div>
      </div>

      <button onClick={() => updateClick()} id='button' className='bg-blue-800 p-2 rounded-lg text-blue-400 cursor-pointer'>Click Here!</button>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Information
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Created by Tropii
          </p>

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Discord
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           fstropii
          </p>

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Snapchat
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            tropiifs
          </p>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Why
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Did it for fun
          </p>
      </div>
    </main>
  )
}
