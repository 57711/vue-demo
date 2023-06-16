import babel from "rollup-plugin-babel";
export default {
    input: "./src/core/index.js",
    output: {
        file: './dist/vue.js',
        name: 'Vue', // global.Vue
        format: 'umd',
        sourcemap: true,
    },
    plugin: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
}