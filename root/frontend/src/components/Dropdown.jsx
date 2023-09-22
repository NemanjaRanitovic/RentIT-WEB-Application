import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dropdown({ selected, setSelected }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const options = ['Object name', 'Vehicle type', 'Location', 'Average rate'];
    const placeholder = 'Search by';

    const  dropdownVariants = {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.2
            }
          }
    };

    const itemVariants = {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      };

    return (
        <div className="w-[200px] m-auto font-poppins relative">
            <div className="bg-white shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)]
                            text-secondary items-center font-bold rounded-md
                            justify-between pt-[10px] pb-[10px]
                            pl-[15px] pr-[15px] cursor-pointer relative"
                onClick={() => setIsActive(!isActive)}>
                    {selected || placeholder}
                    <motion.span className="fas fa-caret-down pt-[4px] right-0 mr-[15px] absolute" />
            </div>
        
            <AnimatePresence>
                {isActive && (
                <motion.div
                    className="absolute top-full w-full left-0 rounded-b-md mt-[5px]
                                bg-secondary shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)]
                                font-normal text-primary z-[1]"
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.2 }}
                >
                    {options.map((option) => (
                    <motion.div variants={itemVariants}
                        onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                        }}
                        className="p-2.5 cursor-pointer hover:bg-third hover:text-primary rounded-md"
                        key={option}
                    >
                        {option}
                    </motion.div>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Dropdown;
