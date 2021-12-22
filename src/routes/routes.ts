import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}



const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [

    {
        to: '/lazy/',
        path: 'lazy/*',
        // Manera Peresosa
        Component: LazyLayout,
        name: 'Lazy'
    },{
        to: '/no-lazy',
        path: 'no-lazy',
        // Manera NO Peresosa
        Component: NoLazy,
        name: 'No Lazy'
    }

]