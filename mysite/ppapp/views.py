from .models import hensu,hensu1,hensu2,hensu3,hensu4,hensu5,hensu,hensu6,hensu7,hensu8,hensu9,hensu10,hensu11,hensu12,hensu13,hensu14,hensu15
from .enzan import fun,branch,lines
from collections import defaultdict
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.views.generic import CreateView, TemplateView
from .form import UserCreateForm, LoginForm

modelbox=[hensu,hensu1,hensu2,hensu3,hensu4,hensu5,hensu,hensu6,hensu7,hensu8,hensu9,hensu10,hensu11,hensu12,hensu13,hensu14,hensu15] #ユーザごとのデータベースのリスト


#アカウント作成
class Create_Account(CreateView):

    def post(self, request, *args, **kwargs):
        form = UserCreateForm(data=request.POST)

        if form.is_valid():
            form.save()
            #フォームから'username'を読み取る
            username = form.cleaned_data.get('username')
            #フォームから'password1'を読み取る
            password = form.cleaned_data.get('password1')
            #フォームに入力された'username', 'password1'が一致する会員をDBから探し，userに代入
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')

        return render(request, 'ppapp/create.html', {'form': form,})

    def get(self, request, *args, **kwargs):
        form = UserCreateForm(request.POST)
        return  render(request, 'ppapp/create.html', {'form': form,})

create_account = Create_Account.as_view()

#ログイン
class Account_login(View):

    def post(self, request, *arg, **kwargs):
        form = LoginForm(data=request.POST)

        if form.is_valid():
            username = form.cleaned_data.get('username')
            user = User.objects.get(username=username)
            login(request, user)
            return redirect('/front/')

        return render(request, 'ppapp/index.html', {'form': form,})

    def get(self, request, *args, **kwargs):
        form = LoginForm(request.POST)
        return render(request, 'ppapp/index.html', {'form': form,})

account_login = Account_login.as_view()

def front(request):

    hensulist=[]
    box2=None
    global modelbox
    flag = True

    for r in range(1,6):

        if len(modelbox[r].objects.filter(user=request.user)) == 0: #ユーザのデータベースが存在しない場合
            box1=r
        else:
            modelbox[r].objects.filter(user=request.user)[0] #ユーザのデータベースが存在する場合
            box2=r

    if box2 == None:
        box2=box1

    if request.method == "POST": #データを受けっとた

        if "clear" in request.POST: #クリアボタンの場合
            modelbox[box2].objects.all().delete() #ユーザのデータベースのデータを削除する

        if "chack" in request.POST: #チェックボタンの場合

            i=0
            line=defaultdict(list)
            answer=request.POST.getlist("date",None) #送られてきたデータを受け取る
            print(answer)

            lines(line,answer)
            print(line)

            while i != len(answer):
                try:
                    if answer[i] == "dainyu" or answer[i] == "loop" or answer[i] == "add" or answer[i] == "sub" or answer[i] == "mul" or answer[i] == "div":
                        flag=fun(answer,i,line,request.user,box2)
                        if flag == False:
                            break

                    if answer[i] == "branch":
                        if branch(answer,i,line,box2)==True: #この関数は分岐の処理を行う　返り値には一つ目にtrue,flase、2、3つ目に分岐先の範囲
                            pass
                        else:
                            bra = branch(answer, i, line,box2)
                            for r in range(bra[1],bra[2]+1):
                                answer.pop(bra[1]) #分岐先の処理を消す
                    i = i + 1

                except:
                    flag = False
                    break

        for i in modelbox[box2].objects.all():
            hensulist.append([i.name,i.value])

    question={
              "hensulist" : hensulist,
              "flag" : flag
              }

    return render(request, 'ppapp/front.html',question)