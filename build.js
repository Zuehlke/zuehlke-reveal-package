const watchMode = process.argv[2] === 'watch';

require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist',
    loader: {
        '.jpg': "file",
        '.png': "file",
        '.woff2': "file",
        '.woff': "file",
        '.svg': "file",
        '.ttf': "file",
        '.eot': "file",
    },
    watch: watchMode,
}).catch(() => process.exit(1));