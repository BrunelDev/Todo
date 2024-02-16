from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from dbconnections import db
from rest_framework import status

class Todo(APIView):
    def get(self, request):
        todo = db.find({}, {'_id': 0})
        res = []
        for i in todo:
            res += [i]
        return Response({'res': res}, status= status.HTTP_200_OK)
    def post(self, request):
        taskname = request.data.get('taskName')
        craetionDate = request.data.get('creationDate')
        deadline = request.data.get('deadline')
        show = request.data.get('show')
        showNext = request.data.get('showNext')
        todo = {'taskName': taskname,
                'creationDate': craetionDate,
                'deadline': deadline,
                'show': show,
                'showNext': showNext}
        db.insert_one(todo)
        return Response(status=status.HTTP_200_OK)
        
        
       