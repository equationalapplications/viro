import * as React from "react";

import { ViroAnimation } from "./Animation/ViroAnimations";
import { Viro3DPoint, ViroNativeRef } from "./Types/ViroUtils";
export declare type Props = {
    position?: Viro3DPoint;
    focalPoint?: Viro3DPoint;
    active: boolean;
    animation?: ViroAnimation;
    fieldOfView?: number;
};
export declare class ViroOrbitCamera extends React.Component<Props> {
    _component: ViroNativeRef;
    static contextType?: React.Context<any> | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Props, _prevState: any): void;
    setNativeProps: (nativeProps: Props) => void;
    render(): JSX.Element;
}
