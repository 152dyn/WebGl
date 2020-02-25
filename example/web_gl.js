let canvas = document.getElementById("canvas");
const gl = canvas.getContext('webgl')
if (!gl) {
	console.error('gl init failed', gl)
}
// 顶点着色器程序
let VSHADER_SOURCE
	= 'void main() {'
	+ 'gl_Position = vec4(0.0, 0.0, 0.0 ,1.0);\n' // 设置坐标
	+ 'gl_PointSize = 10.0;\n' // 设置尺寸
	+ '}'

// 片远着色器
let FSHADER_SOURCE
	= 'void main() {'
	+ 'gl_FragColor = vec4(1.0, 0.0, 0.0, 1);\n'  // 设置颜色
	+ '}'

// 初始化着色器----------------------------------- start
// 创建着色器对象(顶点)
const vertShader = gl.createShader(gl.VERTEX_SHADER)
// 用于设置 WebGLShader 着色器（顶点着色器及片元着色器）的GLSL程序代码
gl.shaderSource(vertShader, VSHADER_SOURCE)
// 用于编译一个GLSL着色器，使其成为为二进制数据，然后就可以被WebGLProgram对象所使用.
gl.compileShader(vertShader)

// 创建着色器对象(片元)
const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragShader, FSHADER_SOURCE)
gl.compileShader(fragShader)

// 创建和初始化一个 WebGLProgram 对象。
// 一个 WebGLProgram 对象由两个编译过后的 WebGLShader 组成 - 顶点着色器和片段着色器（均由 GLSL 语言所写）。这些组合成一个可用的 WebGL 着色器程序。
const prog = gl.createProgram()
// 添加顶点着色器
gl.attachShader(prog, vertShader)
// 添加片元着色器
gl.attachShader(prog, fragShader)
// 用于删除一个参数提供的 WebGLShader对象
// gl.deleteShader(vertShader)
// gl.deleteShader(fragShader)
// 链接一个给定的WebGLProgram 到已附着的顶点着色器和片段着色器，并将着色器代码转化为GPU代码。
gl.linkProgram(prog)
// 将定义好的WebGLProgram 对象添加到当前的渲染状态中。
gl.useProgram(prog)

// 初始化着色器----------------------------------- end

// 设置canvas背景色
gl.clearColor(0.0, 0.0, 0.0, 1.0)
// 情况canvas
gl.clear(gl.COLOR_BUFFER_BIT)
// 绘制一个点
gl.drawArrays(gl.POINTS, 0, 1)
