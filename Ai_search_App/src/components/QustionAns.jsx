import Answer from './Answer';
function QustionAns({item,index}) {
    return (
        <>
            <div key={index + Math.random()} className={item.type == 'q' ? "flex justify-end" : ""}>
                {
                    item.type == 'q' ? <li key={index + Math.random()} className='text-right p-1  border-8 border-zinc-700 dark:bg-zinc-700 bg-amber-50 rounded-tl-3xl rounded-bl-3xl  rounded-br-3xl w-fit'><Answer ans={item.text} index={index} totalAns={1} type={item.type} /></li>
                        : item.text.map((ansitem, ansindex) => (
                            <li key={ansindex + Math.random()} className='text-left p-1 '><Answer ans={ansitem} index={ansindex} totalAns={item.text.length} type={item.type} /></li>
                        ))
                }
            </div>
        </>
    )
}
export default QustionAns