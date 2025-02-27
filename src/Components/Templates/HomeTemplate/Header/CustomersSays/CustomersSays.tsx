'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomersSays.module.css';

export default function CustomersSays() {
    const qElems = useRef<HTMLQuoteElement[]>([]);

    const pushRef = (el: HTMLQuoteElement) => {
        qElems.current.push(el!);
    };

    useEffect(() => {
        if (qElems.current) {
            
            let index: number = 0;
            const showText = () => {
                if (index + 1 > qElems.current.length) {
                    index = 0;
                }
                if (index == 0) {
                    qElems.current[qElems.current.length - 1].classList.remove(
                        styles.move
                    );
                }
                if (index >0 && index <= qElems.current.length ) {
                    qElems.current[index - 1].classList.remove(styles.move);
                }

                qElems.current[index].classList.add(styles.move);
                index++;
                setTimeout(showText, 5000);
            };
            showText();
            // setTimeout(() => {
            //     qElems.current[0]
            // }, 5000);
        }
    }, [qElems]);

    return (
        <div>
            <p className="mb-4">What our customers says</p>
            <blockquote className="text-2xl font-bold w-96 h-20 overflow-hidden relative block">
                <q className={styles.q} ref={pushRef}>
                    Lorem ipsum dolor sit amet consectetur
                </q>
                <q className={styles.q} ref={pushRef}>
                    lkmlfdkmlfk
                </q>
                <q className={styles.q} ref={pushRef}>
                    saeid
                </q>
            </blockquote>
        </div>
    );
}
