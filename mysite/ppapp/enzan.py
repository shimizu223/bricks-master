from .models import hensu,hensu1,hensu2,hensu3,hensu4,hensu5,hensu,hensu6,hensu7,hensu8,hensu9,hensu10,hensu11,hensu12,hensu13,hensu14,hensu15
modelbox=[hensu,hensu1,hensu2,hensu3,hensu4,hensu5,hensu,hensu6,hensu7,hensu8,hensu9,hensu10,hensu11,hensu12,hensu13,hensu14,hensu15]


def lines(line,answer): #変数の接続先を辞書型で登録する
    for i in range(len(answer)):
        if answer[i] == "dainyu":
            for r in range(i+3,len(answer)):
                try:
                    line[answer[i+1]].append(int(answer[r]))
                except:
                    break
        if answer[i] == "upload":
            for r in range(i+2,len(answer)):
                try:
                    line[answer[i+1]].append(int(answer[r]))
                except:
                    break
        if answer[i] == "add" or answer[i] == "sub" or answer[i] == "mul" or answer[i] == "div":
            try:
                line[i].append(int(answer[i+4]))
                try:
                    line[i].append(int(answer[i+5]))
                except:
                    pass
            except:
                pass



def fun(answer,i,line,username,box2): #代入、四則演算、ループの処理を行いデータベースへ登録させる
    if answer[i] == "dainyu":
        if len(modelbox[box2].objects.filter(name=answer[i+1])) == 0:
            hen2 = modelbox[box2]()
        else:
             hen2 = modelbox[box2].objects.filter(name=answer[i+1])[0]
        hen2.user = str(username)
        hen2.name = answer[i + 1]
        hen2.value = answer[i + 2]
        hen2.save()

    if answer[i] == "add": #加算の処理
        sisoku(answer[i + 1], answer[i + 2], answer[i + 3], "+",line,str(username),box2)

    if answer[i] == "sub": #減算の処理
        sisoku(answer[i + 1], answer[i + 2], answer[i + 3], "-",line,str(username),box2)

    if answer[i] == "mul":#掛け算の処理
        sisoku(answer[i + 1], answer[i + 2], answer[i + 3], "*",line,str(username),box2)

    if answer[i] == "div":#割り算の処理
        sisoku(answer[i + 1], answer[i + 2], answer[i + 3], "/",line,str(username),box2)

    if answer[i] == "loop":#るーぷの処理
        loop(answer,i,line,str(username),box2)

def clc(v1,v2,si):
    if si == "+":
        return int(v1) + int(v2)
    if si == "-":
        return int(v1) - int(v2)
    if si == "*":
        return int(v1) * int(v2)
    if si == "/":
        return int(v1) / int(v2)

def inverse_lookup(d, x):
    for k,v in d.items():
        for i in v:
            if x == i:
                return k

def sisoku(he,v1,v2,si,line,username,box2):
    if int(v1) % 2 == 1:
        v3 = inverse_lookup(line, int(v1) - 1)
    if int(v1) % 2 == 0:
        v3 = inverse_lookup(line, int(v1) + 1)
    if int(v2) % 2 == 1:
        v4 = inverse_lookup(line, int(v2) - 1)
    if int(v2) % 2 == 0:
        v4 = inverse_lookup(line, int(v2) + 1)
    an=clc(modelbox[box2].objects.filter(name=v3)[0].value , modelbox[box2].objects.filter(name=v4)[0].value , si)
    if len(modelbox[box2].objects.filter(name=he)) == 0:
        hen2 = modelbox[box2]()
    else:
        hen2 = modelbox[box2].objects.filter(name=he)[0]
    hen2.user = username
    hen2.name = he
    hen2.value = an
    hen2.save()

def loop(answer,i,line,username,box2):
    if int(answer[i + 4]) % 2 == 1:
        v = int(inverse_lookup(line, int(answer[i + 4]) - 1))
    if int(answer[i + 4]) % 2 == 0:
        v = int(inverse_lookup(line, int(answer[i + 4]) + 1))

    if len(modelbox[box2].objects.filter(name=answer[i + 1])) == 0:
        hen2 = modelbox[box2]()
    else:
        hen2 = modelbox[box2].objects.filter(name=answer[i + 1])[0]
    hen2.user = username
    hen2.name = answer[i + 1]
    hen2.value = answer[i + 2]
    hen2.save()

    for r in range(v+2,len(answer)+1):
        try:
            int(answer[r])
        except:
            box=r-1
            break
    for r in range(int(answer[i + 2]),int(answer[i + 3])+1):
        hen2 = modelbox[box2].objects.filter(name=answer[i + 1])[0]
        hen2.value = r
        hen2.save()
        fun(answer,v,line,username,box2)
    for r in range(v, box):
        answer.pop(v)

def branch(answer,i,line,box2): #分岐の処理
    if int(answer[i + 4]) % 2 == 1:
        v = int(inverse_lookup(line, int(answer[i + 4]) - 1))
    if int(answer[i + 4]) % 2 == 0:
        v = int(inverse_lookup(line, int(answer[i + 4]) + 1))
    for r in range(v+2,len(answer)+1):
        try:
            int(answer[r])
        except:
            box=r-1
            break
    try:
        v1=int(answer[i+2])
    except ValueError:
        v1=int(modelbox[box2].objects.filter(name=answer[i+2])[0].value)
    try:
        v2=int(answer[i+3])
    except ValueError:
        v2=int(modelbox[box2].objects.filter(name=answer[i+3])[0].value)
    if answer[i+1] == "equal":
        if v1 == v2:
            return True
        else:
            return False,v,box
    if answer[i+1] == "bigger":
        if v1 > v2:
            return True
        else:
            return False,v,box
    if answer[i+1] == "smaller":
        if v1 < v2:
            return True
        else:
            return False,v,box
    if answer[i+1] == "notequal":
        if v1 != v2:
            return True
        else:
            return False,v,box