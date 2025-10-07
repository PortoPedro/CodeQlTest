import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('test-controller')
export class TestControllerController {
    constructor(private prisma: PrismaService) { }





    @Post('execCode')
    async execCode(@Body('code') code: string) {
        try {
            // ⚠️ INSEGURANÇA INTENCIONAL
            const result = eval(code);
            return { ok: true, result };
        } catch (err) {
            return { ok: false, error: err?.message ?? String(err) };
        }
    }


    @Post('sqlInjectionCode')
    async sqlInjectionCode(@Body('q') q: string) {
        // >>> INSEGURANÇA: concatenação direta do input em SQL

        const sql = "SELECT * FROM tabela WHERE col2 LIKE '" + q + ";";

        console.log(sql);
        const sqlParts = sql.split(';');
        try {
            for (const t of sqlParts) {
                console.log(t + ';');
                await this.prisma.$queryRawUnsafe(t + ';');
            }
        } catch (error) {
            console.error('sql injection realizado, checar tabela:', error);
        }
    }
}
