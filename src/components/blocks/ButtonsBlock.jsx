import Button from "../elements/Button";

const ButtonsBlock = () => {
    return (
        <div className="buttons-block">
            <Button className="btn" innerHTML={'ADD'}   />
            <Button className="btn" innerHTML={'DEL'}   />
            <Button className="btn" innerHTML={'SORT'}  />
            <Button className="btn" innerHTML={'USORT'} />
        </div>
    );
}

export default ButtonsBlock;