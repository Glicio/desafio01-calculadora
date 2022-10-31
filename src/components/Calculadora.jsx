import * as React from 'react';
import { useState } from 'react';
import Backspace from './svg/Backspace';


const Button = ({value, className="",size="4rem", onClick}) => {

    return (<button onClick={(e) => {onClick(value)}} className={`bg-black hover:bg-neutral-900 font-bold text-white flex items-center justify-center ${className}`} style={{width: size, height: size}}>
        {value}
    </button>)
}


const Tela = ({conta}) => {
    return <div className='w-full h-24 bg-neutral-900 text-white font-bold flex items-center justify-center'>
        {conta}
    </div>
}


export default function Calculadora() {

    const [conta, setConta] = useState("")
    const onClick = (value) => {
        if(conta.length > 20) return
        setConta(old => old+value)
    }

    return (<div className='main bg-zinc-600 '>
        <Tela conta={conta}/>
        <div className="flex h-full p-1" >
            <div className="buttons grid grid-rows-5 grid-cols-3 gap-1">
                <Button onClick={onClick} value={"/"} className={"bg-zinc-800"}/>
                <Button onClick={onClick} value={"*"} className={"bg-zinc-800"}/>
                <Button onClick={() => {setConta("")}} value={"C"} className={"bg-zinc-800"}/>
                <Button onClick={onClick} value={1}/>
                <Button onClick={onClick} value={2}/>
                <Button onClick={onClick} value={3}/>
                <Button onClick={onClick} value={4}/>
                <Button onClick={onClick} value={5}/>
                <Button onClick={onClick} value={6}/>
                <Button onClick={onClick} value={7}/>
                <Button onClick={onClick} value={8}/>
                <Button onClick={onClick} value={9}/>
                <Button onClick={onClick} value={0} className="col-start-2"/>
            </div>
            <div className="actions h-full flex flex-col gap-1 ml-1">
                <Button onClick={() => {setConta(old => {return old.length > 1 ? old.slice(0, old.length-1) : ""})}} value={<Backspace/>} className={"bg-zinc-800"}/>
                <Button onClick={onClick} value={"-"} className={"bg-zinc-800"}/>
                <Button onClick={onClick} value={"+"} className={"bg-zinc-800"}/>
                <Button onClick={() => {setConta(old => eval(old))}} value={"="} className={"bg-zinc-800"}/>
            </div>
        </div>
    </div>)
}