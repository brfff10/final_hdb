from rest_framework_nested import routers
from rest_framework.routers import DefaultRouter
from webapp.views import PatientViewSet, RecordViewSet, CityViewSet, JobViewSet, PatientRecordViewSet, UserViewSet, DataViewSet, PatientDataViewSet, DiagnosisViewSet, TreatmentViewSet
from django.conf.urls import url, include

router = routers.SimpleRouter()
router.include_format_suffixes = False
router.register(r'patients', PatientViewSet, base_name='patient')

patients_router = routers.NestedSimpleRouter(router, r'patients', lookup='patient')
patients_router.register(r'record', PatientRecordViewSet, base_name='patient-record')
patients_router.register(r'data', PatientDataViewSet, base_name='patient-record')

router.register(r'records', RecordViewSet, base_name='record')
router.register(r'data', DataViewSet, base_name='data')
router.register(r'cities', CityViewSet, base_name='city')
router.register(r'jobs', JobViewSet, base_name='job')
router.register(r'users', UserViewSet, base_name='user')
router.register(r'diagnosis', DiagnosisViewSet, base_name='diagnosis')
router.register(r'treatments', TreatmentViewSet, base_name='treatment')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^', include(patients_router.urls)),
]

