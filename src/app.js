console.log("Running");

const app={
    title:"The bucket list",
    subtitle:"Make a computer decide your way of life!",
    options:[]
}

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        render()
    }
}

const onRemoveAll=()=>{
    app.options=[];
    render();
}

const appRoot=document.querySelector('#app')


const render=()=>{
    const template=(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0? "here are your options" :"No options"}</p>
        <p>{app.options.length}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {
                app.options.map((option,index)=>{
                    return <li key={index}>{option}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
)
    ReactDOM.render(template,appRoot)
}

render()












