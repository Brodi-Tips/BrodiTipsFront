import styles from "styles/Home.module.css";
import stylesCheckout from "styles/Checkout.module.css";
import stylesHighlight from "styles/Highlight.module.css";

import CardCheckout from "../../../components/CardCheckout";
import Head from "next/head";
import CopySvg from "../../../icons/CopySvg";
import { copy } from "../../../util/copy";
import { getPrices } from "../../../util/getPrices";
import { fullCopyProduct } from "../../../products/fullCopyProduct";
import CopyBet from "../../../components/CopyBet";

export default function Home() {
  const pix = {
    pix30Days: {
      key: "00020126930014BR.GOV.BCB.PIX0111047320193310256Não esqueça de adicionar seu telegram para validarmos...5204000053039865406750.995802BR5925JULIO CESAR FERREIRA LIMA6009FORTALEZA61086053366262170513PIXFIFA30DIAS6304B826",
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAD0CAYAAACsLwv+AAAAAXNSR0IArs4c6QAAGw1JREFUeF7t3dtuZDmMRNHq///oHmCeOtODXNigdOzysF4pkcFghKT0rf75999///2z/5aBZeBXMPDPGvpXzHGbWAb+l4E19AphGfhFDKyhf9Ewt5VlYA29GlgGfhEDa+hfNMxtZRlYQ68GloFfxMAa+hcNc1tZBtbQq4Fl4BcxsIb+RcPcVpaBNfRqYBn4RQysoX/RMLeVZWANvRpYBn4RA2voXzTMbWUZWEOvBpaBX8TAGvoXDXNbWQbGhv7nn38eZVG/vv2O5339abzCc5sc9ftev67X/tv9vefXPGtc+E/rRfWmelpDi2HEpwMYlv9TDVrXr6F/1oUlvayhxdAa+oWBp2+svaGbQNfQja8vq/eGHhIYt9cn9d/2Ipnq6bihp4D0xJvmnw5Y+KI+/0igNZ9utGk+7Z/y+/QLQHqa9nObry96nP5Nsb+u4bcv4mmgdSBaL8OdFvS0v9rPVA+n+xd+8TPtR/VP598bevhHT6cC3Bv6VfJTPmUgHah6gekAqPXX0IcNOB3QVIBr6DX0fxkY6/H2k7sKXgJXfHoCa//pE7We6NMbRPOogqr56vppv9P9mrf6eVpP15/ctxtWfgm07teApwat+yue2q/w1Hx1/dSQ0/3iV/2sod+e1FNC19DtSSu+ZJAqYK1XvSle7Z/qT/0pvw7UL/zsk/vzTwLpiS9B1IHU9VUQulFqPzVfXb+Gbor4dU9uGVD0nN5fBXnboDLUlJ/bB4LwqT/NdxoXvppf+X79DS3CRNDp/Wvoz4xXA2p+NZ8O0BoXPumrHohraDAuwuvA1tBr6P8yIH2tofGTXzqx6xct1tCv//uwbjDxpflUgdd8wl/j6ncNHQ0rwmRg3ajaLwGczi8B3Y6Lb8XFZ8VfDa38mqfqqT/lF759cr8xoBtAA5Ngb+evAz+9vvZf+ax4T+eX4VRvDT38PrQEJoJP36Br6M9P9DoPGVwG0zw0/6ov9acDQ/3uDb03dNXIx/USuOISfAW7hq5H1hvDp0+Y0yekBKX2JZAqyNv51I/4lYHE520+pvmn/NT94vO0f67/YIkaUlwNyyASoAak/FOBqf+KT+vX0K8fAcS/9Kf9ip/Ov4bGr2OuoV8lqQPy9gE3zT898Or+NXR80stwEqAGpPxTgWngFZ/W7w29N/RHzVXBS8CKV4PqSbPx119OWX7bV+Wl1xqvB/KXA/r0b1vVBur6FVz7Sa09sM4eWFWvdf0a+vBPku2BsQfGf0343S/QeiAc/6JYBVDXr+HWcJ8Md1sfVa91/bff0BXw6fWnn5Sn8SmfBlhvCOU7/UUx5asGm+YT34pX/pTv6fj4hn4a8HTgEtjT/UhAa+j2GXg6P81jmv/2/jX0w/975vtAJaA19Bq6HAJr6DV00cuX/7rn9Itpmi81838s1gE7zX97/9jQ9TPstCERrhutPrlrPeVXfMrPT9tf+RP+0/n0YpKehFf5636tX0Pjhq4CkmEV18D+tnjlT/2dzifDraHx+8wamOLTgVZD1XrKr7j6/9vilT/1dzrfGvqNgX1yty/arKFfBVRvwDX05yPv+JNbJ6xORO1/+gARXglyKkDtF181Ln7f8/20/k/j0QGs+Uzx5Pl9989yixAJSIRXQrS+1lN/Tw9c/a2hZy8u6VUXhOaj+N7QYugtvoZuT+anD7TpAakDTfE1dPz/nkWoBhr9+2X5GnoN/V8Gnj6wpN/xDa0CileDTgkUnmpYPaF0wKif6Ykvfmt+8XebD/VT4+rn9HzEj/AovoYePqk1oDV0+4MBMlA17OkDmoaKP3moflXvy4E8/aJYLagbQQMQATKQ8Kr+6f3qR3zVA0X1pvxVPFqv/jUvxes8tb7yp3mo3hoaDJ0WgAZcB1rz6UaTYaqgZNCKX/g0L8XV3+n5iB/hUXz85NaABGDaYBXsbYFUAQhP5afyofXfPd+qH62f9qsDQvE6T/Vz/Ib+7oFrQCJE+6dx1V9DV4Zm6+s8ZcDT+Wbd/fmzN/Tlv0lWB6QDUi8ACUwHSL1han/CX/PV9eKn8n86X+1nb+g3BupAJPipYKugqkHreuGpApzyU+ud7rfOX/yd5mN8Q08JE0Gnnzy1Xq2v9acFOc033S8+Jdgq+HoAq7/T+OSH6/o4/W2rSrgEIQJu16v1tV4CU1wG0P7Tcc3vtGHqvNXvaXxr6Pj701VAtwUgg0kwElwVSM03XV/nUfup+TWPeuAqn+Y73V/ns0/u4U/2PD6wiLcKoq6vhltDvzKgA6HO47qhdSKeNsRPv5HVrwZYDVT5qPll0JpPeG/Xk16n9Wt+6eELntufodWABF5PMAlC9W7jrfUrntMGEp9TgVe8t+uJ72n9mn8NHb+vLMIkuDqgNfTdPyCgeSk+nefp/NLn3tDxM+jpAa2h19D/NWF9gcrg3/4ZmgBx42q/nkg/7USW4esBI35qvun6Og/h1/zEp/JXw+kjiuLCo/ga+o0hDVADkYBq/qcFW/HX9Wvozy8UGVbxNfQa+oWBatC6fg29hn7RgG44nmAP/08ZumGrwOuTV3zUfNP1tV/hF786cJS/6q2+4Gp+4f32G1oESAASmAhT/Wm84q/rp/i0X3huG0r5KfDhdz2kH9Wf8pfz/7TvQ4tACVBxEVwPiNP1nsY3xS/DTW9I5Zfg1Z/wSY+qr3lO+/uSfw09+zaKBKOBSjDKfzsu/BKkDFMNIb6EVwe2+ql4hed0vX1yxyeZBCHByYASQK2veooLjwS5hn5lSHxIPzpQxoaeCkINKL8IkuBIUDT8tF7Fo/U6ALS/9qN51HlP69d6U76m9eo8jj+5ZTid8FMCJKAqiIpX9dVfHaDqqd+6X/nE13fvF//Sb+VrWq/qYQ398H+9owHXAU4FVvd/tyGn9cX/GvqNYRGiE/ynEV7xyiDqbw199jPmaT1qvrcPnKyP6Ve5RaDiGXD82e5aX+unA675pweC6ukAq4K9na/mn+Kv+vxufNe/KFYFJQJrvtPr19Cv/1dVnddpg03nIfzT+NP41tDxI8R0QDpgFK8Cq/nUX30xnM733TfglH/tr/w+/kWxKig1XPOdXi+B6gYSHsXFjwQvwag/7Vd98TPtT/srfuVTXHwe5+P2Z+jasL4PeDsuvFUQGqjy1f31QDi9vuarB8B0PuJTBpvuV7/Sg/q//uQmgPiDG2voV0YrH1NBybCKVz1ovQyofpVf/Nb9wrOGPnwgTAekgZ0WoAQngVQDar3i4rfegKf5VL6K7zT/5G+f3K+/nCHCNKA19OwX+KthZMA6D+Wr+KSX6QH4pb+poWWA04Cn9SoeDVA3pAQyFZzy136F57RAK76ftn7Kl/Rc4+PP0CpYB6B8ique4hpQNZDW13rqXweMDCk82j/l92/LP+VL86zxNTR+tntv6PaEXkM3vqphtX4NvYb+qJH/bwat/f66G/o2Acpf4zrh9OTT/umNrieznvCVD9Wb8lH5Eh7lU1z9VP5qPeVXPsXHN/QUoPafjosQDVz719Bi6DVe59uyf12t+Z7GowNKeGq/a+g3xqYEr6GbBE8bSNU139N41tD4D+ArQTKYnrASiD5DKf9UQFM+6v7Kh9ZP+1d+8a/5iR/V134dMMr/Bf/T34euACshTxtY/VQ8VYASpPBJUMKv/apf8Vc91PparwNo2o/qKz5+crNA/N8eJWgRKgEqv/qp8Ypniq/WkyGVT/tP87WG/szoGjr+jbHTAlW+ahgZsB4Yylfxqd9aTwe86tV4rVf7qXj2yf3GwGlB1ieXBljxSUBraDGOG3D4J7Aq/xXt8Rv6tqCmAteTbUp4PcF1AKjfp+sJrwQ45f+7+1V/lR/NN9c7/UWxNfTsR/+qYOt6Ca4KbDpv7dcBMMVb92eDDf+301xvDf351yfrwJ822NP1dCBIgDKoXkjf3a/6q/xUfan+PrkPn6BPC+7pelWw1aB1fTXElC8ZqvJT8av+dUOfBizCar3pk08EVzzqbyr4ab/qpxpGeNTvT+dL+Ctf0tsaOt7QpwXIAQ3xPf3ErQI9zafyiQ/Fq0Hreh2Y1Mvtz9BTgGwgfhvh9IkufNP+f5pA1c8aun1NpvIlve0NPbwBRbAMoP1r6FeGxOdP4+uvv6GnAtX+Gq8COP3kqvUlgPrCqHxpvfqp+J7mu+ITH9N5VT6F5/gNzYLDn+1W/tMEnz7xq6A0cOGrfGm98Ez7Uz86AE7jEx+n9VbrfeH79GdoAdLAtL/GNWB9hhHeqcBq/mqYypfWi8+KT/zJMJqf+hH/2i984qPyKTx7Q8c/1K8BVoFJUBq49ksANS48EnDlr64/je80P1Uftf7Y0AJYBXd6IDWfCFS/VdCqV+O139qP8Gjewic80/yaj/BN96s/8av4GloMvcXrQCTAWJ7LbwtSANSv8Infaf6pIaf71Z/4VXwNLYbW0ImhqeEk+Gn+qSGn+9VfIvv/WLyGjgzWgUiAsTyX6wacClIA1K/wid9p/tP9C+/peuT/9Fe51WAdSM13+qum7wRKkBqgBqJ6382f+BU/dZ6VL62v+J/GK/7U3/iGloBFYBWw8ile62k9CR5+3/10P8p3On5aH+Jb8dP96YAVnqm+vvC7N/S/L5xoQPUEVT4NXAKUIOoNo3o1vobWhF/jVV9r6DcGJFAZRuNaQ78yVA8Y8Vvjmvc0XvFM9XXd0DqR1XA9oSQQ1atxGVSCqANUvZpvOh/Vq/PQ+hrXPDWfp/Wn/tTPGroy9LZeBpNgZIip4aaCrPSoX+GRoGtc+Kd4NR/1e3r/GloTR3wN/UrQ1CDVsKqn8Wr/04ZU/+pnDV0Z2hv6I2NTg0jQNa7xTvGevmHVn/q5bujTN1ht6PSTVgKo+HQD1AGL7ym+03imfP7t/Gke6k/7r38fWgY7LUjV0wmr/VO8GthpA0kAtd+Kv+YX3lq/rld9xW8fWKq/hr78J4gkaB0wP02QUzy3Bf/TD0QZUvxq/xp6Df2iERlOgtMLRvkl2Fq/rld9xW/3p/pjQ09PRBH+3TeY8EnAGoAEoHjNLz71otC8p3yovvpVf9N5ah6Kn+7vS7/TH/3UgKcET/dPBTYVgAQoAShe84tPCU7znvKt+upX/U3nqXkofrq/NXRUxFQAKicBKF7zS/AS3Br688/+13lJX5rvGjoyJMKnN5IEoLjameJXfcWFT3Hh134dQN99wE37+3ZDawBTgrVfBE4FoPzqf1pf+XUDn+ZPeE4fCOJfB/B0v/pVXPW1//EvigmQBPW0IEVwNaD6r/kkUNU73V/Fs4Z+nZDmoXmuod8YmhpqPJD4f3VVAz19IEqAa+g19AsDMtBtg9b8EnjNt4ZuhhBfVU+aZ42rvvIdv6Fv3wB6kldCNGARWOspn/DUejWfDpSar/ar/oRP+hAe6bfWV73j+U5/H1qEiHAN9PZ+DaD2V/PdNozwS2C38Wn+wid91HnoI4Hwql7th/nW0J//P18ROB1oFWCtVw0ogdV84k/1xI/4EF7hW0O/MVQJ1/rpgLVfA9YNV/dXPFN+hF8Gk0Gm+LRf+CqfmtcaWgwhLgKV/rQgVE8CrwbS+tOCrfVq/TpPza/OQ/nqAaH+n+73C57bT24NQIKaGqYOoOKd4tP+KsiKX/wrX8Vf16v+dL5r6DcGNaA6kHrCVUFOBygBqd/a3xpajL7G63zres3/9Hxb93/+XP+2VQVUCVlDz76oV/mToJVPF4AOMOmpGrSuV/9Vv9N+jz+5K8F14KcbFl7FbwtA9aug6nr1V+PTedd61VAVn+bz3Xod39BqsJ7IGqDq3Y5P8U33V4PW9cJX49UwMuQ0Ln0of92v9afja+jIqAStdNP91aB1vfDV+BpaijgbX0NHPiVopZvurwat64WvxtfQUsTZ+NjQtwdc29WTafoZR/0K7+2PIBWf1te4+p/OR3jqAVbXa363+1f+NbQYeotXQUkw0xtM+XWAqZ8aF51r6PYnjMTnl/mf/sESDawKuDak+hK46kngdX/lQ/grPq2vcfU/nY/wPH3Aqd/T81W9vaHF0N7QLwzIkKJT+58+sOoB8P/+yV0JkyB0Qp+O64St/UkQErT4meKR4cSH+K/4ar+310/7E39T/Ndv6NMDFKGn43UAtX7NXwde8ayhPzMsPqX36/O+/RlaDdYbSYSejtcB1Po1/xq6MnB2veYrvV+f9xr681cd6wA08H1yvzIqvs7acZ6t4n183lNDi6JKgE44PQl149/GIz7UX91/+sCZ4hP/p/NPDaP9mof0qP11fso3/gzNAvHP0mrgIlCCWkO//nZW5UvzVj7Nt+aXIYVH+0/jqfm0/gufe0O/PrlF4PRAmApa+KqA6/pp/Wn/OtDrjbeG1kTf4lMDaL/iEpAEfXq/8kV6vyxXP1O+hE/1p/2voT9PYPzk1gl3egAShARV8UrAyldvDPWnfKcNe5pP4ROfVU+an/rTfs1L+cVHrj99cp8egAg4TaAMIkLV/+38Erj4FP7T+yXgikfrNT/1p/2n9TjFszf020QqoVVQp/OvoWd/gqnOQwbXgTU9AFh/b+hXiuqA19CfDVUPHPGpfBL89MWk/L/e0CKgxutAq0HrCVoHqPxPC071ZDDt13x/Gn/Co7jmO9Uj+bx9QwtAja+hK2Ov62XQyu8a+vO3PesBMJvuD/wzvmqoCm56ImogiqufajDlU7zW0/o19BpamvsYX0OP6Psjg1Z+19C/3NDTG7HKtd6Qdb3wyCDaX/ma1psaUJ8Rp/k1H8XFt/YrXvNP+VC9L/M4/Rm6CrQClqBUfzow1a/9CO/peqcFpgNm2p9eDD89/2m+pa/j34euBAug4tWgdX2tr/XTActAt+vXA6bqQfNRXP1rv+I1/3Teqrc39PC3v6qgNZCp4JVf8Vq/9l/zy1CKq1/tV7zm/+sNPW1gegNVAVWBqr/Tgjj95Kz9ik/1W+epeqcNVfGpftWH1td6x5/cU4BTgm8LQv1J4BqQ9iuu/Gvo9hdqKp9VH1pf66+h3xirB8rpG1SGVTwL4O0jSBWY8Ez5vN1PxVfxSB+Vb9VfQ6+hP2pEL5419GeL/fWGngpAJ1B9Mirfbbz1BhAe9a/9pw1YbxjxMcUvfqZ4nzao9Pul36e/Dy1B5QbwZFS+0wKqgqoCU/5pPzLcaT5r/1U/6uc2X8ovPmv8+JNbDdSBqCENTPtv4634hGcNffaPHIpv6VXzVX7ps8bX0P/e/VlcDbzeUGvoNfQnkx83tARaBa4T6vRnmtMncs13+kSvfNf6yn86n/Sg+Gm96IAVHvml7l9DvzFWDaiB1HzVABq4DCf80/y1n4pX+NSf6j2Nv9b7cqCc/qLYlMDvHlA1YO1XN8R0oNMbo9b/aYaQfsS/5qn84kP7K/9r6OFnZg1MgqlxCUBx4b0t4CrQilf9qz/Vexp/rXfc0PVGGAMefptKA572MxXIdP8Uf91/2lCnD7zKZ10vvqR3vQgrv+PP0GqoGkgNiHDtr3hUTwK8XU/9Vvx1nqqv/iVoxVW/9l/Xi681NCYkwjVgCUwD0n7hqwNWPfV7G4/qC78Mq7jq1/7reumlzlvr2e/0i2JqSAMVwJq/5hOBdcB1fe1PeE/nUz9TvmVYxVVf+G+/sDSvaX9f5n3a0JXg2rDyK64BKq78Na56itd60/XCM41P8dULRIY/jUf55AftP/4ZmgXjXww5TfhPF5xO7NN8aF4ySMUr/iserZdBvptP8av+9oZ++7ZVFWQlWOslcMWV/3RceKbx23jrR5LTeJRPB5D27w2NF8PtE/ynGUCCmeLVftWvcRnk9nxP41W+xw0tQDVeb9gqKAmi4tX62s/0yXa6nvLVG7LyP60/rTedh/Sh+Bp6+Cd4RHCNS5C6UaaCnB54wr+Gropo69fQa+gXxayhP/867e0Dqdn36+o19Bp6Df0fBqYvnL/+ya0n4PTEOU3Qaby60RRXf3rCPh2veOv6ytfp/KqveMWj9dU/4xv6tEHUQD1B6xNJ9TWAarDT+SS4abzireuFT/PR/tvx2q/Wq98v+p7+pNga+vMfbpeANNB6QKjeNF7x1vXCJ4Fr/+147Vfr1e8a+vKvX1YDaqA1398m2NqfBH67f+Wv89R69Xvd0NMnsZ7IIvR0/Uzo5R9UOd2/DFX71/par65X/aov5Zvim+5fQ2tCw7gGNP2IsoZu31bSODWvn75/Da0JDeMSyBp69md4T7/ANC/J4bv3r6E1oWFcA15Dr6H/KzHppcrx+Let9CQUQO2vcX1mEp76RQsNSIau/Slf7W+6Xjfobbzfzd+0f+3XfNbQYugtLsLX0O1/Ion0c/kaWgoFhVMB6was+dXO9Iao+SWw0/1T8ZcXVH5OwxHfik/xTPvXfuHbG1oM7Q2dGJIgpweqwMiwiiu/4tP+tV/1f72hpwISwco/FVDdL7zTrykIj+LTF4nwn+5f+TR/GVD5tf8LH6d/9LMOdDrg+iSvBIlwDfQ2H+JP/Qq/8k/5Fz+Vf63XgaB+637xX/Eq397QYEiEyxASrAZU9wvvVJDCo7gMowNC+E/3r3yaf52v1iu+hl5DSyMvcRlW8TX0KwM6MNJw/vz58+sNrRO9ElbXV4FL8OrndL16A6m+4pXfypfyq1/hV/w03i96+O2foWUADXgarwOuA9cTVQJVvdP7p3xoHtMbT/0Kv+LiW/0pvje0GBrG64DrwNfQZ5+wa+jDvy4oA9T43tCvPzut80n8TvdP89f6Wl/1IfyK1wM747/95K6ARLCeVDphRaj2a2CKT/lQ/1P+tH+KX/vVX52P6umFIz6EV/VPx68/uaeAp4SrfjWg1isuPIpXAVX+JGDhm8bV3xr6M8NraPxfV/VGX0PPLL2GnvG3hl5Df1SQbsSZ/L7uXkPPGD1u6Bkc79YNWOOqKEHXetN8ejHUJ7Pwq56e9LXf0/hrf+r3Nj7pUfE1NBiqgjwt8Fr/tOAk8NP9nsa/htYR8BaX4GI6LteAalwF1V+tN80ng502hOqtoT9/W7DqQ3pUfG/ovaFfGJgeOBKwDojTB1LF8934ZFjFx4ZWgY0vA8vAcwysoZ/jeistA9cZWENfp3gLLAPPMbCGfo7rrbQMXGdgDX2d4i2wDDzHwBr6Oa630jJwnYE19HWKt8Ay8BwDa+jnuN5Ky8B1BtbQ1yneAsvAcwysoZ/jeistA9cZWENfp3gLLAPPMbCGfo7rrbQMXGdgDX2d4i2wDDzHwBr6Oa630jJwnYE19HWKt8Ay8BwDa+jnuN5Ky8B1Bv4HcNIXUADoZYQAAAAASUVORK5CYII=",
    },
    pix90Days: {
      key: "00020126930014BR.GOV.BCB.PIX0111047320193310256Não esqueça de adicionar seu telegram para validarmos...52040000530398654071750.995802BR5925JULIO CESAR FERREIRA LIMA6009FORTALEZA61086053366262170513PIXFIFA90DIAS6304FAD5",
      base64:
        "data:image/png;base64,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",
    },
    pixPremium: {
      key: "00020126930014BR.GOV.BCB.PIX0111047320193310256Não esqueça de adicionar seu telegram para validarmos...52040000530398654074200.995802BR5925JULIO CESAR FERREIRA LIMA6009FORTALEZA61086053366262190515PIXFIFAInfinite63041357",
      base64:
        "data:image/png;base64,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",
    },
  };

  const { prices30Days, prices90Days, prices180Days } = fullCopyProduct;

  const onCopy30Days = () => copy(pix.pix30Days.key);
  const onCopy90Days = () => copy(pix.pix90Days.key);
  const onCopyPremium = () => copy(pix.pixPremium.key);

  return (
    <>
      <Head>
        <title>Bródi Tips - PIX</title>
      </Head>
      <div className={"checkout"}>
        <nav className={stylesCheckout["navigator"]}>
          <img
            className={styles.loading + " index"}
            width={80}
            height={80}
            src="/images/logo.png"
            alt="Bródi Tips"
          />
          <h1>Bródi Tips - Fifa 💚</h1>
        </nav>
        <div className={stylesCheckout["nav-fake"]}></div>
        <main className={stylesCheckout["main"]}>
          <CardCheckout
            onClick={onCopy30Days}
            imgSrc={pix.pix30Days.base64}
            icon={<CopySvg />}
            title="Fifa - 30 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="por mês"
            periodSmall="por dia"
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
            plus={[<CopyBet key={"copy"} />]}
            {...prices30Days}
          />
          <CardCheckout
            onClick={onCopy90Days}
            imgSrc={pix.pix90Days.base64}
            icon={<CopySvg />}
            title="Fifa - 90 dias"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="por 3 meses"
            periodSmall="por dia"
            isHighlight
            positionCard={1}
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
            plus={[<CopyBet key={"copy"} />]}
            {...prices90Days}
          />
          <CardCheckout
            onClick={onCopyPremium}
            imgSrc={pix.pixPremium.base64}
            icon={<CopySvg />}
            title="Fifa"
            titleHighlight="Premium"
            description="No Fifa nosso mercado de atuação é o Essocer GT League 12 minutos!"
            currency="R$"
            fromText="De"
            toText="Por"
            period="Por 6 meses"
            periodSmall="por dia"
            positionCard={2}
            textButton="Copiar PIX"
            textButtonClicked="PIX copiado!"
            plus={[<CopyBet key={"copy"} />]}
            {...prices180Days}
          />
        </main>
        <nav
          className={
            stylesCheckout["navigator"] +
            " " +
            stylesCheckout["nav-bottom"] +
            " " +
            " animate__animated animate__backInUp   animate__delay-1s"
          }
        >
          <div
            className={
              stylesHighlight.Badge +
              " " +
              stylesHighlight["is-highlightBadge"] +
              " " +
              stylesHighlight["is-highlightBadgeBig"] +
              " " +
              stylesHighlight.banner
            }
          >
            <span>
              Ao comprar hoje, você já poderá ter
              <span className={stylesCheckout.green}>&nbsp; greens</span>!
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}