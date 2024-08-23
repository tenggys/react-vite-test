import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
    const [ contentType, setContentType] = useState(null)

    function handlClick(type) {
      setContentType(type)
    }

      /*let tabContent = null
        if (contentType) {
            tabContent = <p>{differences[contentType]}</p>
        } else {
            tabContent = <p>Нажми на кнопку</p>
        }*/

    return (
        <section className="container">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <Button isActive={contentType === 'way'} onClick={() => handlClick('way')}>p</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handlClick('easy')}>easy</Button>
          <Button isActive={contentType === 'program'} onClick={() => handlClick('program')}>program</Button>

          {!contentType && <p>Нажми на кнопку</p>}
          {!contentType && <p>{differences[contentType]}</p>}

          {/*tabContent*/}
        </section>
    )
};
