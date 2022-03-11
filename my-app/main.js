import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
const myName  = "Dun";
const myAge = 20;
const myStatus =true;
const showInfo = (props) =>{
  console.log(props)
  return <p>Thong tin user {props.name}</p> 
} 

const ShowInfo= (props) =>{
  return <p>Thong tin {props.name}</p> 
} 

ReactDOM.render(
<div>
<h1>Hello {myName}</h1>
<p>{myAge}</p>
<p>{myStatus ? "Da ket hon" : "Chua kket hon"}</p>
  {showInfo({name="Linh"})}
</div>
)



