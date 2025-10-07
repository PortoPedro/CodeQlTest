import { PrismaService } from 'src/prisma/prisma.service';
export declare class TestControllerController {
    private prisma;
    constructor(prisma: PrismaService);
    execCode(code: string): Promise<{
        ok: boolean;
        result: any;
        error?: undefined;
    } | {
        ok: boolean;
        error: any;
        result?: undefined;
    }>;
    sqlInjectionCode(q: string): Promise<void>;
}
