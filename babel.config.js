module.exports = {
    presets: [
        ["@babel/preset-env"], // ES语法转换
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }]
    ]
}