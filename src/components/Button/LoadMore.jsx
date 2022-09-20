
import './styles.css'

export const LoadMoreButton=({text,clicando,disabled})=>

(
<button 
disabled={disabled}
className='btn-load' 
onClick={clicando}
>
 {text}
</button>


)


