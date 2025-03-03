'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomersSays.module.css';

export default function CustomersSays() {
    const qElems = useRef<HTMLQuoteElement[]>([]);

    const pushRef = (el: HTMLQuoteElement) => {
        qElems.current.push(el!);
    };

    useEffect(() => {
        if (qElems.current.length) {
            let index: number = 0;
            const showText = () => {
                if (qElems.current[index]) {
                    if (index + 1 > qElems.current.length) {
                        index = 0;
                    }
                    if (index == 0) {
                        qElems.current[
                            qElems.current.length - 1
                        ].classList.remove(styles.move);
                    }
                    if (index > 0 && index <= qElems.current.length) {
                        qElems.current[index - 1].classList.remove(styles.move);
                    }

                    qElems.current[index].classList.add(styles.move);
                    index++;
                    setTimeout(showText, 5000);
                }
            };

            showText();
        }
    }, [qElems]);

    return (
        <div className="absolute w-[calc(100%_-_2rem)] bottom-0 md:static">
            <p className="mb-4">What our customers says</p>
            <blockquote className="text-2xl font-bold md:w-96 h-16 overflow-hidden relative block">
                <q className={styles.q} ref={pushRef}>
                    Lorem ipsum dolor sit amet consectetur
                </q>
                <q className={styles.q} ref={pushRef}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </q>
                <q className={styles.q} ref={pushRef}>
                    Lorem ipsum dolor sit
                </q>
            </blockquote>
        </div>
    );
}
