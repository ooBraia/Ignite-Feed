import { PencilLine } from 'phosphor-react'
import styles from '../components/sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"/>
           
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/113848949?v=4"/>
                <strong>Bryan Felipe</strong>
                <span>Web Developer - Front end</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}