import React,{useState} from 'react';

const Tabs = ({tabs}) => {
    const [activeTab,setActiveTab]=useState(0);

    const handleClick=(index)=>{
       setActiveTab(index);
    }
    return (
        <div>
            <ul>
                {
                    tabs.map((tab,index)=>(
                        <li key={index}>
                            <button onClick={()=>handleClick(index)}>{tab.title}</button>
                        </li>
                    ))
                }
            </ul>
            <div>{tabs[activeTab].description}</div>
        </div>
    );
}

export default Tabs;
