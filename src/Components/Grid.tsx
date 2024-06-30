import { useState, useEffect } from 'react';
import {colorDic} from "../Constants/constant"
function Grid({ rows = 15, cols = 20 }:{rows: number, cols: number}) {

    const [color, setColor] = useState<string[]>(colorDic[0]);
    const [grid, setGrid] = useState<string[][]>(Array(rows).fill([]).map(() => Array(cols).fill('bg-black')));


    useEffect(() => {
        const interval = setInterval(() => {
          setGrid(prevGrid => {
            const newGrid = prevGrid.map(row => row.slice());
    
            for (let col = 0; col < cols; col++) {
              for (let row = rows - 1; row > 0; row--) {
                newGrid[row][col] = newGrid[row - 1][col];
              }
    
              if (!newGrid[1][col].includes('black')) {
                const shadeIndex = color.indexOf(newGrid[1][col]);
                if (shadeIndex >= 0 && shadeIndex < 7) {
                  newGrid[0][col] = color[shadeIndex + 1];
                } else {
                  newGrid[0][col] = 'bg-black';
                }
              } else {
                const randomShadeIndex = Math.floor(Math.random() * 8);
                newGrid[0][col] = Math.random() < 0.1 ? color[randomShadeIndex] : 'bg-black';
              }
            }
    
            return newGrid;
          });
        }, 50);
    
        return () => clearInterval(interval);
      }, [cols, rows, color]);
    
      useEffect(() => {
        const interval1 = setInterval(() => {
          const newColor = colorDic[Math.floor(Math.random() * colorDic.length)];
          setColor(newColor);
        }, 2500);
    
        return () => clearInterval(interval1);
      }, []);
   
    return (
        <div className='flex flex-col'>
            {
                grid.map((_, i) => {
                    return (<div key={`${i}`} className='flex flex-row'>
                        {
                            grid[i].map((_, j) => <div key={`${i} ${j}`} className={`text-white text-right md:w-5 w-4 border border-white md:h-5 h-4 ${grid[i][j]}`}>
                            </div>)
                        }
                    </div>)

                })
            }
        </div>
    )
}

export default Grid