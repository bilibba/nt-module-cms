import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ClassifyItem } from "./classify-item.entity";
import { ArtInfo } from "./art-info.entity";
import { BoardItem } from "src/plugin/message-board/entities/board-item.entity";
import { LeavewordInfo } from "src/plugin/message-board/entities/leaveword-info.entity";

@Entity('item')
export class Item{

    @PrimaryGeneratedColumn({
        comment: '自增id'
    })
    id: number;

    @Column({
        comment: '名称'
    })
    name: string;

    @Column({
        comment: '说明',
        nullable: true
    })
    explain: string;

    @Column({
        comment: '类型'
    })
    style: string;

    @Column({
        comment: '正则表达式',
        nullable: true
    })
    regular: string;

    @Column({
        comment: '信息',
        nullable: true
    })
    info: string;

    @OneToMany(type=>ClassifyItem,classifyItem=>classifyItem.item)
    itemClassifys: ClassifyItem[];

    @OneToMany(type=>ArtInfo,artInfo=>artInfo.item)
    artInfos: ArtInfo[];

    @OneToMany(type=>BoardItem,boardItem=>boardItem.item)
    boardItems: BoardItem[];

    @OneToMany(type=>LeavewordInfo,leavewordInfo=>leavewordInfo.item)
    leavewordInfos: LeavewordInfo[];

}