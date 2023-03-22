import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Index_(["blockNumber", "blockTimestamp", "transactionHash", "contract", "functionName", "functionSuccess"], {unique: false})
@Entity_()
export class GravatarFunctionCreateGravatar {
    constructor(props?: Partial<GravatarFunctionCreateGravatar>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    blockTimestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Index_()
    @Column_("text", {nullable: false})
    functionName!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    functionValue!: bigint

    @Index_()
    @Column_("bool", {nullable: false})
    functionSuccess!: boolean

    @Column_("text", {nullable: false})
    displayName!: string

    @Column_("text", {nullable: false})
    imageUrl!: string
}
