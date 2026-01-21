function History({historyy,sethistoryy,setselectedHistory}) {
     const clearHistory = () => {
        localStorage.clear();
        sethistoryy([]);
      }
    return (
        <>
            <div className='col-span-1  dark:bg-zinc-800 bg-amber-50'>
                <h1 className='dark:text-white text-black pt-3 text-xl flex justify-center'><span>Resent Search </span><button className='cursor-pointer' onClick={clearHistory}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" /></svg></button>
                </h1>
                <ul className='overflow-auto text-left  mt-2'>
                    {historyy && historyy.map((hisitem, hisindex) => (
                        <li onClick={() => (setselectedHistory(hisitem))} key={hisindex + Math.random()} className='dark:text-zinc-400 text-black p-1 pl-5  truncate cursor-pointer hover:bg-zinc-700 hover:text-zinc-200'>{hisitem}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default History